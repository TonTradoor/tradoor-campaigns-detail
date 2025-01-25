import { Suspense } from "react";
import Loading from "@/compoents/Loading/indedx";
const Page = () => {
  return <Suspense fallback={<Loading />}></Suspense>;
};
export default Page;
