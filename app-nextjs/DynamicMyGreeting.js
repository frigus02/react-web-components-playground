import dynamic from "next/dynamic";

const DynamicMyGreeting = dynamic(() => import("./MyGreeting"), {
  loading: () => <div>Loading my-greeting...</div>,
  ssr: false
});

export default DynamicMyGreeting;
