import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './View';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipe was found for your query . Please try another one`;
  _generateMarkUp() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultView();
