// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports
import "@Static/css/Heading.module.scss";

// #region Interface Imports
import { IHeading } from "./Heading";
// #endregion Interface Imports

const Heading: React.FunctionComponent<IHeading.IProps> = (
    props
): JSX.Element => {
    const { text } = props;

    return (
        <div className="title">
            <span className="title__back">{text}</span>
            <span className="title__front">{text}</span>
        </div>
    );
};

export { Heading };
