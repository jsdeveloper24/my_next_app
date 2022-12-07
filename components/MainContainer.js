import Menu from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
      <>
          <Head>
              <meta keywords={keywords}></meta>
              <title>Главная страница</title>
          </Head>

          <div className="navbar">
              <Menu href={'/'} text="Главная"/>
              <Menu href={'/users'} text="Пользователи"/>
          </div>

          <div className="children">
              {children}
          </div>

          <style jsx>
              {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }

                  .link {
                    color: white;
                    margin: 10px;
                  }

                `}
          </style>
      </>
    );
}
export default MainContainer;