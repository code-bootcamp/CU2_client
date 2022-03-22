import CodingUsHistoryUI from "./History.Presenter";

interface ICodingUsHistoryProps{
    historyData: Object;
    title: string;
}

export default function CodingUsHistory (props: ICodingUsHistoryProps) {
    
    return <CodingUsHistoryUI
        historyData={props.historyData}
        title={props.title}
    />;
}