import dynamic from "next/dynamic";

const Loading = () => {
  return <div>App is loading ...</div>;
};

const ElementsApp = dynamic(() => import("../components/Monaco"), {
  loading: () => <Loading />,
  ssr: false,
});

export default ElementsApp;
