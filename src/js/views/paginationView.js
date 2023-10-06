import View from './View';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkUp() {
    const numberOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPageNumber = this._data.page;
    /**PAGE 1 AND OTHER PAGES */
    if (currentPageNumber === 1 && numberOfPages > 1) {
      // return `PAGE 1 AND OTHERS`;
      /**ADD DATA-SET TO BUTTON SO THAT JS WILL KNOW TO WHICH PAGE IT SHOULD GO */
      return `
       <button data-goto="${
         currentPageNumber + 1
       }" class="btn--inline pagination__btn--next">         
          <span>Page ${currentPageNumber + 1}</span>
          <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
    }
    /**MIDDLE PAGE */
    if (currentPageNumber < numberOfPages) {
      // return `MIDDLE PAGE`;
      return `
       <button data-goto="${
         currentPageNumber - 1
       }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPageNumber - 1}</span>
       </button>
       <button data-goto="${
         currentPageNumber + 1
       }" class="btn--inline pagination__btn--next">
           <span>Page ${currentPageNumber + 1}</span>
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
           </svg>
       </button>
      `;
    }
    /**LAST PAGE */
    if (currentPageNumber === numberOfPages && numberOfPages > 1) {
      // return `LAST PAGE `;
      return `
 <button data-goto="${
   currentPageNumber - 1
 }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPageNumber - 1}</span>
       </button>     
      `;
    }
    /**ONLY 1 PAGE  */
    // return `ONLY 1 PAGE`;
    return ``;
  }
}
export default new PaginationView();
