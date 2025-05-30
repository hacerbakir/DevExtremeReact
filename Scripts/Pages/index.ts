import Button, {ClickEvent} from 'devextreme/ui/button';


const buttonElement = document.getElementById('button') as HTMLButtonElement;
if (buttonElement) {
    new Button(buttonElement, {
        text: 'Click me',
        onClick: (e: ClickEvent) => {
            console.log(e.component.option('text'));
            alert('Hello World!')
        }
    });
}