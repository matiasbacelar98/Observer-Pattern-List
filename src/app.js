import createState from './utils/State';

import users from './constants/users';

import List from './components/List';
import Form from './components/Form';

//----------- Initializations -----------//
const state = createState();
state.update(users); // Hydrate state with initial users

const listComponent = List();
const formComponent = Form(state);

//----------- Add observers -----------//
state.addObserver(listComponent);

//----------- Initial render -----------//
formComponent.render();
listComponent.render(state.get());
