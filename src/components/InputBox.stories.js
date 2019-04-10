import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from '@storybook/addon-knobs/react';
import InputBox from "./InputBox.js";




storiesOf('InputBox', module)
    .addDecorator(withKnobs)
    .add("default", () => <InputBox name={""}  />)
    .add('WithInput', () => {
        return <InputBox name={"tranzevo"} />;
      })