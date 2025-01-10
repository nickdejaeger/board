<script setup lang="ts">
import { ProIcon } from '@proicons/vue'
</script>

<template>
    

    <form action="">
        <header>
            <h4>Form</h4>
            <nav>
                <button><ProIcon icon="Add" :size="16" /></button>
                <button><ProIcon icon="More" :size="20" /></button>
            </nav>
        </header>
        <main>
            <section>
                <label for="name">What's your name?</label>
                <input type="text" name="" id="name" placeholder="Pick a name">
            </section>

            <section>
                <label for="doctype">Document type</label>
                <div class="radios">
                    <label for="doctype22"><input type="radio" name="doctype" id="doctype22">Govermental ID</label>
                    <label for="doctype23"><input type="radio" name="doctype" id="doctype23">Passport</label>
                </div>
            </section>

            <section>
                <label for="tshirtsize">T-Shirt Size</label>
                <select name="tshirtsize" id="tshirtsize45">
                    <option value="" class="placeholder">Pick a Size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
            </section>

            <section>
                <label for="arrivaldate">Arrival Date</label>
                <input type="text" name="" id="arrivaldate" placeholder="Pick a date">
            </section>
        </main>
        <footer>
            <button type="button">+ Add Question</button>
            <button type="submit">Submit form</button>
        </footer>
    </form>

</template>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    border-radius: 1.2rem;
    background-color: #FFF;
    box-shadow: 5px 10px 20px -25px rgb(0 0 0 / 50%);
    max-width: 20rem;
    width: 100%;
    margin: 0 2rem 2rem 0;

    input {
        border: 1px solid #f7f6f9;
        background-color: #f7f6f9;
        border-radius: .5rem;
        padding: .5rem .75rem;
    }
    input::placeholder {
        color: #797a83;
    }
    input:focus {
        border: 1px solid dodgerblue;
    }

    .radios {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: .2rem;

        label {
            display: flex;
            align-items: center;
            gap: .5rem;
            cursor: pointer;
            width: fit-content;

            input {
                appearance: none;
                padding: 0;
                background: none;
                position: relative;
                width: 14px;
                height: 14px;
                top: 1px;
                left: 1px;
                border-color: #8c8c8c;
                cursor: pointer;
                transition: all .35s ease-in-out;

                &:checked {
                    border-color: dodgerblue;
                    box-shadow: inset 0 0 0 3px dodgerblue;
                }
            }

            &:hover {
                input {
                    border-color: dodgerblue;
                }
            }
        }
    }

    select {
        border: 1px solid #f7f6f9;
        background-color: #f7f6f9;
        border-radius: .5rem;
        padding: .5rem .75rem;

        .placeholder {
            color: #797a83;
        }

        &:focus {
            border: 1px solid dodgerblue;
        }
    }







    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
        border-bottom: 1px solid #e5e5e5;
        padding: 1rem 1.5rem .5rem;

        h4 {
            font-family: "Urbanist", serif;
            font-size: 1.2rem;
            font-weight: 400;
            letter-spacing: .025rem;
        }

        nav {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1.5rem;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: .25rem;
    }

    

    footer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 1.5rem 2rem;

        button {
            padding: .45rem .75rem;
            border-radius: .5rem;
            text-align: center;

            &[type=button] {
                border: 2px dashed #e5e5e5;
                color: #797a83;
            }

            &[type=submit] {
                border: 2px dashed dodgerblue;
                background-color: dodgerblue;
                color: #FFF;
            }
        }
    }
}


</style>