declare interface View {
    render: () => void;
    update: () => Boolean;
}


export default View