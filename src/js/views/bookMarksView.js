import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView';
class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet . Find a nice recipe and bookmark it :)`;
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkUp() {
    return this._data
      .map(bookMark => previewView.render(bookMark, false))
      .join('');
  }
}
export default new BookMarkView();
