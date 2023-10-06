import React from 'react';
import styles from "./App.module.css"
import Route from './controllers/routerController';
import RouterLink from './components/commonRouterLink';

function App() {
	
	return (
	  	<div className={styles.App}>
			<Route />
	  	</div>
	);

}

export default App;