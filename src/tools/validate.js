(function (app) {

    class Validate {
        constructor(form, data) {
            this.form = form;
            this.data = data || {};
        }

        checkForm(callback) {
            this.formIsValid = true;
            Array.from(this.form, (el) => {
                if (!el.hasAttribute('name')) {
                    return;
                }
                this.setValue(el);
                if (el.hasAttribute('required')) {
                    this.clearError(el);
                    this.checkField(el);
                }
            });

            if (this.formIsValid) {
                callback(this.data);
                this.form.reset();
            }
        };

        setValue(el) {
            if (el.type === 'radio') {
                let radio = this.form.querySelector('input[name=' + el.name + ']:checked');
                this.data[el.name] = radio ? radio.value : '';
            } else {
                this.data[el.name] = el.value;
            }
        };

        checkField(el) {
            switch (el.tagName) {
                case "SELECT":
                    !(el.selectedIndex != 0) && this.setError(el);
                    break;
                case "TEXTAREA":
                    !(el.value && el.value != el.defaultValue) && this.setError(el);
                    break;
                case "INPUT":
                    switch (el.getAttribute('type')) {
                        case "text":
                            !(el.value && el.value != el.defaultValue) && this.setError(el);
                            break;
                        case "number":
                            !parseInt(el.value) && this.setError(el);
                            break;
                        case "email":
                            let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                            !regex.test(el.value) && this.setError(el);
                            break;
                        case "radio":
                            let checked = this.form.querySelector('input[name=' + el.name + ']:checked');
                            !checked && this.setError(el);
                            break;
                    }
                    break;
            }
        };

        clearError(el) {
            let err = el.parentNode.querySelector('small');
            if (err) el.parentNode.removeChild(err);
        };

        setError(el) {
            this.formIsValid = false;
            let err = document.createElement('small');
            err.style.color = 'red';
            err.textContent = el.getAttribute('err') || 'pole wymagane';
            el.parentNode.appendChild(err);
        };
    }

    app.Validate = Validate;

})(App);