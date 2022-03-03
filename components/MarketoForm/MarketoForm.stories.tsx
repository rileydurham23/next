import Flex from "../Flex";
import { MarketoForm as Component } from "./MarketoForm";
import { useDefaultFormValues } from "./helpers";
import demo from "./fixtures/demo.json";
import download from "./fixtures/download.json";

const onSubmit = () =>
  new Promise((resolve) => setTimeout(() => resolve({}), 1000));

const StoryComponent = ({ config }: any) => {
  const initialValues = useDefaultFormValues(config.fields);

  return (
    <Flex p={4} width="100%" maxWidth="500px" justifyContent="stretch">
      <Component
        uid="UID_0"
        fields={config.fields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        waitingLabel={config.meta.waitingLabel}
        buttonLabel={config.meta.buttonLabel}
        error="Something went wrong"
      />
    </Flex>
  );
};

export default {
  component: Component,
  title: "Base/MarketoForm",
};

export const Download = () => <StoryComponent config={download} />;

export const Demo = () => <StoryComponent config={demo} />;
