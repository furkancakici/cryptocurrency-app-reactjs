import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';
import './App.css';

import { Navbar } from './components/';
import { CryptoDetails, HomePage, NewsPage, Cryptocurrencies } from './pages';

function App() {
   return (
      <div className='app'>
         <Router>
            <div className='navbar'>
               <Navbar />
            </div>
            <div className='main'>
               <Layout>
                  <div className='routes'>
                     <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route
                           path='/cryptocurrencies'
                           element={<Cryptocurrencies />}
                        />
                        <Route
                           path='/crypto/:coinId'
                           element={<CryptoDetails />}
                        />
                        <Route path='/news' element={<NewsPage />} />
                     </Routes>
                  </div>
               </Layout>
               <div className='footer'>
                  <Typography.Title
                     level={5}
                     style={{ color: 'white', textAlign: 'center' }}
                  >
                     Cryptoverse <br />
                     All rights reserverd
                  </Typography.Title>
                  <Space>
                     <Link to='/'>Home</Link>
                     <Link to='/exchanges'>Exchanges</Link>
                     <Link to='/news'>News</Link>
                  </Space>
               </div>
            </div>
         </Router>
      </div>
   );
}

export default App;
