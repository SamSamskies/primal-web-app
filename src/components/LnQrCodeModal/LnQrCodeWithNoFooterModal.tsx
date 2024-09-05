import { Component } from "solid-js";
import { hookForDev } from "../../lib/devTools";
import LnQrCodeModal from "./LnQrCodeModal";

const LnQrCodeWithNoFooterModal: Component<{
    id?: string,
    open?: boolean,
    lnbc: string | undefined,
    onPay?: () => void,
    onClose?: () => void,
}> = (props) => {
    return <LnQrCodeModal {...props} hasFooter={false} />
}

export default hookForDev(LnQrCodeWithNoFooterModal);
