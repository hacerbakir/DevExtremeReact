import Button from 'devextreme/ui/button';
const buttonElement = document.getElementById('button');
if (buttonElement) {
    new Button(buttonElement, {
        text: 'Click me',
        onClick: (e) => {
            console.log(e.component.option('text'));
            alert('Hello World!');
        }
    });
}
