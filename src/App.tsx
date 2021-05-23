import styles from "./App.module.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import PageA from "./pages/pageA"
import PageB from "./pages/pageB"
import PageC from "./pages/pageC"

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route path="/a" component={PageA} />
          <Route path="/b" component={PageB} />
          <Route path="/c" component={PageC} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
