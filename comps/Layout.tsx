const Layout = ({ children }: any) => {
  return ( 
    <div className="layout">
      <div className="layout-children">
        {children}
      </div>
    </div>
   );
}
 
export default Layout;