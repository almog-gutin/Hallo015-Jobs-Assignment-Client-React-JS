import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header.componenet';
import Footer from './components/shared/Footer.component';
import Loader from './components/shared/Loader.component';

const HomePage = lazy(() => import('./pages/HomePage.component'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.component'));

// import HomePage from './pages/HomePage.component';
// import PageNotFound from './pages/PageNotFound.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />

                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
