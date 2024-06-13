
type RouterType = {
  router : {
    pathname: string,
    query: string,
  }
}

const RouterPush = (router : RouterType) => {
    return ( 
        router.push({
            pathname: router.pathname,
            query: router.query,
          },
          undefined,
          {scroll: false}
        )
     );
}
 
export default RouterPush;