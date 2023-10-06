import icons from 'url:../../img/icons.svg';
import View from './View';
class PreviewView extends View {
  _parentElement = '';
  _generateMarkUp() {
    const idValue = window.location.hash.slice(1);
    console.log(this._data);
    return `
    <li class="preview">
      <a class="preview__link  ${
        this._data.id === idValue ? 'preview__link--active' : ''
      }" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image_url}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${
            this._data.key ? '' : 'hidden'
          }">
          <svg>
          <use href="${icons}.svg#icon-user"></use>
          </svg>
          </div>
          </div>
      </a>
    </li>  
    `;
  }
}
export default new PreviewView();