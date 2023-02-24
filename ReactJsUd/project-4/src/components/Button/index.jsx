export const Button = ({ children, onButtonClicked, disabled = false }) => {
    return(
        <button disabled={disabled} style={{ fontSize: '60px'}} onClick={onButtonClicked}>{children}</button>
    );
};