import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick }) {
   
    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-80">
            
            <TextInput 
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or phrase here ..."
                onChangeHandler={handleTextInputChange}
            />

            <div className="flex gap-4">
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />

                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>

        </form>
    );
}

export default TextInputForm;