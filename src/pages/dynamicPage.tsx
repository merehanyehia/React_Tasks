import jsonData from "../config/test2.json";
import { useSelector } from 'react-redux';
import { getComponentByname } from "../config/configComponent";

function DynamicPage() {
  // const id = 3;
  
  const id = useSelector((state: any) => state.screen.screenID);
  const screen = jsonData.screens.find((screen) => screen.id === id);

  return (
    <>
      {screen &&
        screen.children &&
        screen.children.map((child) => {
          const DynamiComp: any = getComponentByname(child.componentName);

          if (child.props) {
            return (
              <div key={child.id}>
                <DynamiComp props={child.props} />
              </div>
            );
          } else {
            return (
              <div key={child.id}>
                <DynamiComp />
              </div>
            );
          }
        })}
    </>
  );
}

export default DynamicPage;
