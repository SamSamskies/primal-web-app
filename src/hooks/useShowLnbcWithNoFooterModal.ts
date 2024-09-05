import { useAppContext } from "../contexts/AppContext";

export const useShowLnbcWithNoFooterModal = () => {
  const app = useAppContext();

  return (invoice: string) => {
    app?.actions.openLnbcWithNoFooterModal(invoice, () => {
      app.actions.closeLnbcWithNoFooterModal();
    });
  }
};
