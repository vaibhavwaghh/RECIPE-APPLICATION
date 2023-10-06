import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import resultView from './views/resultView.js';
import bookMarksView from './views/bookMarksView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/**COMING FROM PARCEL NOT PART OF JS */
// // if (module.hot) {
// //   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const idValue = window.location.hash.slice(1);

    if (idValue) {
      recipeView.renderSpinner();
    }
    /**LOADING  RECIPES */
    await model.loadRecipe(idValue);
    /**RENDERING RECIPES */
    recipeView.render(model.state.recipe);
    /**INSTEAD OF IMPORTONG ENTIRE CLASS AND DOING THIS
     * const recipeView = new RecipeView(model.state.recipe)
     * I CREATED AN OBJECT OF THE CLASS IN THE CLASS ITSELF AND PASSED THAT OBJECT*/
    resultView.render(model.getSearchResultsPage());
    /**HERE I WANTED TO RENDER THE RESULT-VIEW  SO THAT I CAN ADD A NEW CLASS TO USER SELECTED RECIPE*/
    if (model.state.bookmarks.length === 0) {
      bookMarksView.renderError();
    } else {
      bookMarksView.render(model.state.bookmarks);
    }
  } catch (err) {
    recipeView.renderError();
    console.error(err);
    searchView.addHandlerSearch(controlSearchResults);
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    /**GET SEARCH QUERY */
    const query = searchView.getQuery();
    if (!query) return;
    /**LOAD SEARCH RESULTS */
    await model.loadSearchResults(query);
    /**RENDER RESULTS */
    resultView.render(model.getSearchResultsPage());
    /**RENDER PAGINATION BUTTONS */
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    resultView.renderError();
  }
};

const controlPagination = function (goToPage) {
  console.log('PAGE CONTROLLER');
  /**RENDER NEW RESULTS */
  resultView.render(model.getSearchResultsPage(goToPage));
  /**RENDER NEW PAGINATION BUTTONS */
  paginationView.render(model.state.search);
};

const controlServings = function (newServing) {
  /**UPDATE THE RECIPE SERVINGS (STATE) -->DATA-->MODEL.JS*/
  model.updateServings(newServing);
  /**UPDATE THE RECIPE VIEW --> RECIPEVIEW.JS */
  recipeView.render(model.state.recipe);
};

const controlAddBookMark = function () {
  /**IF IT IS NOT BOOKMARKED THEN ADDBOOKMARK IF IT IS ALREADY BOOKMARK THEN REMOVE BOOKMARK */
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.removeBookMark(model.state.recipe.id);
  /**RENDER THE RECIPE VIEW (FILL THAT BOOKMARK) */
  recipeView.render(model.state.recipe);
  /**SHOW IN THE BOOKMARKS MY BOOKMARK ARRAY */
  bookMarksView.render(model.state.bookmarks);
  if (model.state.bookmarks.length === 0) {
    bookMarksView.renderError();
  }
};
const controlPreviousBookMarks = function () {
  bookMarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    /**SHOW THE SPINNER */
    addRecipeView.renderSpinner();
    /**UPLOAD RECIPE DATA */
    await model.uploadRecipe(newRecipe);
    /**RENDER RECIPE ON RECIPEVIEW */
    recipeView.render(model.state.recipe);
    /**ADD  SUCCESS MESSAGE */
    addRecipeView.renderError();
    /**RENDER BOOKMARK VIEW */
    bookMarksView.render(model.state.bookmarks);
    // // /**CHANGE ID IN URL */
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
  } catch (err) {
    console.log(err.message);
    addRecipeView.renderError(err.message);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookMark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  bookMarksView.addHandlerRender(controlPreviousBookMarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
