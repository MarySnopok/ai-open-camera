// a button component with selection / deselection useState monitoring the user interaction.
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { ButtonContent } from "./ButtonContent";

export const SelectionButton = ({ children, pic }) => {
  const [option, setOptionSelection] = useState(false);

  const onUserInteraction = () => {
    if (option) {
      setOptionSelection(false);
    } else {
      setOptionSelection(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => onUserInteraction()}>
      <ButtonContent pic={pic} option={option} title={children} />
    </TouchableWithoutFeedback>
  );
};
