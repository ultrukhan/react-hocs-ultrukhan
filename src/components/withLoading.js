import { useState, useEffect } from 'react';

function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ fetchMethod, params, ...props }) {
    const [data, setData] = useState(null);

    useEffect(() => {
      setData(null);
      fetchMethod(params).then((res) => setData(res));
    }, [fetchMethod, params]);

    return data ? (
      <WrappedComponent data={data} {...props} />
    ) : (
      <p className="center">Loading...</p>
    );
  };
}

export default withLoading;
