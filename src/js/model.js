import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config';
import { AJAX } from './helper';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    source_url: recipe.source_url,
    image_url: recipe.image_url,
    servings: recipe.servings,
    cooking_time: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};
export const loadRecipe = async function (idvalue) {
  try {
    const data = await AJAX(`${API_URL}${idvalue}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    console.log(state.recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    if (data.results === 0) throw err;
    state.search.query = query;
    state.search.results = data.data.recipes.map(res => {
      return {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image_url: res.image_url,
        ...(res.key && { key: res.key }),
      };
    });
  } catch (err) {
    throw err;
  }
  state.search.page = 1;
};
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; /**0 */
  const end = page * state.search.resultsPerPage; /**9 */
  return state.search.results.slice(start, end);
};
export const updateServings = function (newServing) {
  state.recipe.ingredients.forEach(ing => {
    console.log(ing);
    ing.quantity = (ing.quantity * newServing) / state.recipe.servings;
    /**2 * (8/4) = 2 */
    /**newQuantity = oldQuantity * (newServing/oldseving) */
  });
  /**UPDATE THE SERVINGS IN STATE OBJECT TO NEWSERVING AFTER ALL ELEMENTS ARE UPDATED(AFTER LOOP)*/
  state.recipe.servings = newServing;
};
/**STORE THE BOOKMARK IN LOCAL STORAGE */
export const persistBookMark = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookMark = function (recipe) {
  /**PUSH THE RECIPE INTP BOOKMARKS ARRAY */
  state.bookmarks.push(recipe);
  /**MARK CURRENT RECIPE AS BOOKMARKED*/
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
    persistBookMark();
  }
};

export const removeBookMark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) {
    state.recipe.bookmarked = false;
    persistBookMark();
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) {
    state.bookmarks = JSON.parse(storage);
  }
};
init();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        console.log(ingArr);
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format . Please use correct format :)'
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    console.log(data.data);
    state.recipe = createRecipeObject(data);
    addBookMark(state.recipe);
  } catch (err) {
    throw err;
  }
};
/**16b3f609-cd35-4e23-ae7b-7a86bbef5566 */
