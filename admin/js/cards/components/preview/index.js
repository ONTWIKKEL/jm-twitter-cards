import {__} from "@wordpress/i18n";
import {Title} from "../title";
import {Type} from "../cardType";
import {Image} from "../image";
import "./style.scss";

export const Preview = ({props}) => (

    <div className="EmbeddedTweet">
        <div className="EmbeddedTweet-author u-cf">
            <img className="EmbeddedTweet-author-avatar"
                 src={tcDataMetabox.avatar}/>
            <div
                className="EmbeddedTweet-author-name u-pullLeft">{__("Your Twitter name", "jm-tc")}</div>
            <div className="EmbeddedTweet-author-handle u-pullLeft">@{tcDataMetabox.twitterSite}</div>
        </div>
        <div className="EmbeddedTweet-text">
            {'app' !==  Type(props) && (
                <p>{__("The card for your website will look a little something like this!", "jm-tc")}</p>
            )}
            {'app' === Type(props) && (
                <p>{__('Preview is not provided for application card', 'jm-tc')}</p>
            )}
        </div>

        <div className="CardPreview u-marginVm" id="CardPreview">
            <div className="CardPreview-preview js-cardPreview">
                <div className="TwitterCardsGrid TwitterCard TwitterCard--animation">
                    {'app' !== Type(props) && (
                        <div
                            className="TwitterCardsGrid-col--12 TwitterCardsGrid-col--spacerBottom CardContent">
                            <div
                                className={"js-openLink u-block TwitterCardsGrid-col--12 TwitterCard-container " + Type(props) + "--small " + Type(props) + "--noImage"}>
                                <div className={Type(props) + "-image TwitterCardsGrid-float--prev"}>
                                    <div className="tcu-imageContainer tcu-imageAspect--1to1">
                                        <Image props={props}/>
                                    </div>
                                </div>
                                <div
                                    className={Type(props) + "-contentContainer TwitterCardsGrid-float--prev"}>
                                    <div className={Type(props) + "-content TwitterCardsGrid-ltr"}>
                                        <Title/>
                                        <p className="TwitterCard-desc tcu-resetMargin u-block TwitterCardsGrid-col--spacerTop tcu-textEllipse--multiline">{props.meta.cardDesc}
                                            <span
                                                className="SummaryCard-destination">{tcDataMetabox.domain}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);