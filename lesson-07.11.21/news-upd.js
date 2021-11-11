// / 1a67d1f9-5a96-4da7-be22-c71da045e31c

// fetch(BASE_URL)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data.response);
//   });

// const fetchNews = async () => {
//   try {
//     const response = await fetch(BASE_URL);
//     const results = await response.json();
//     console.log(results);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchNews();

const API_KEY = "1a67d1f9-5a96-4da7-be22-c71da045e31c";
const BASE_URL = `https://content.guardianapis.com/search?api-key=${API_KEY}&q=react&page=`;

class News {
    constructor(url) {
        this.pageCounter = 1;
        this.totalPages = null;
        this.url = url;

        this.searchForm = document.querySelector(".form-js");
        this.searchInputValue = "";

        this.list = document.querySelector(".list-js");
        this.prevBtn = document.querySelector("#prev");
        this.nextBtn = document.querySelector("#next");
        this.input = document.querySelector(".page-counter");
        this.span = document.querySelector("span");
    }

    // fetchNews = () => {
    //   const query = `&q=${this.searchInputValue}`;
    //   let url = this.url + this.pageCounter + query;
    //   fetch(url)
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(data => {
    //       if (data.response.status === 'ok') {
    //         this.renderNews(data.response.results);
    //         this.totalPages = Number(data.response.pages);
    //         this.renderPagination(data.response);

    //         return;
    //       }
    //       console.log('неверный запрос');
    //     })
    //     .catch(console.log);
    // };

    fetchNews = async () => {
        try {
            let query = "";
            if (this.searchInputValue) {
                query = `&q=${this.searchInputValue}`;
            }
            let url = this.url + this.pageCounter + query;

            const res = await fetch(url);
            const data = await res.json();

            if (data.response.status === "ok") {
                this.renderNews(data.response.results);
                this.totalPages = Number(data.response.pages);
                this.renderPagination(data.response);

                return;
            }
            console.log("неверный запрос");
        } catch (error) {
            console.log(error);
        }
    };

    renderNews = (arrayResults) => {
        const newsListMarkup = arrayResults.map(
            ({ webPublicationDate, webTitle, webUrl }) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                const p = document.createElement("p");
                a.href = webUrl;
                a.target = "_blank";
                a.textContent = webTitle;
                p.textContent = webPublicationDate;

                a.append(p);
                li.append(a);
                return li;
            }
        );
        this.list.append(...newsListMarkup);
    };

    renderPagination = (response) => {
        this.input.value = response.currentPage;
        this.span.textContent = `из ${response.pages}`;
    };

    loadListeners = () => {
        window.addEventListener("load", this.fetchNews);
        this.prevBtn.addEventListener("click", this.onPrevBtnClick);
        this.nextBtn.addEventListener("click", this.onNextBtnClick);
        this.input.addEventListener("input", this.onInputChange);
        this.searchForm.addEventListener("submit", this.onSearchFormSubmit);
    };

    onPrevBtnClick = (evt) => {
        if (this.pageCounter < 2) {
            evt.target.disabled = true;
            return;
        }
        this.pageCounter -= 1;
        this.fetchNews();
        this.nextBtn.disabled = false;
    };

    onNextBtnClick = (evt) => {
        if (this.input.value >= this.totalPages) {
            evt.target.disabled = true;
            return;
        }

        this.pageCounter += 1;
        this.fetchNews();
        this.prevBtn.disabled = false;
    };

    onInputChange = (evt) => {
        const inputValue = Number(evt.target.value);
        this.pageCounter = inputValue;
        this.fetchNews();
    };

    onSearchFormSubmit = (evt) => {
        evt.preventDefault();
        this.searchInputValue = evt.target.elements.query.value.toLowerCase();
        this.fetchNews();
    };

    init = () => {
        this.loadListeners();
        console.log(this.input, this.nextBtn, this.prevBtn, this.span);
    };
}

new News(BASE_URL).init();

let urlToParse =
    `https://content.guardianapis.com/search?page=2&q=debate&api-key=test`.split(
        "?"
    );
