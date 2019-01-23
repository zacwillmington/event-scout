

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePageContainer} />
            <Route path='/events' component={EventsContainer} />
            <Route path='/account' component={AccountContainer} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/signin' component={SigninPage} />
            <Route path='/logout' component={LogoutPage} />
        </Switch>
    )
}