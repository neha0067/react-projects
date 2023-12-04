import { Form } from "react-router-dom"
import { SubmitButton } from "."

function Newsletter() {
  return (
    <section className="pb-20 grid grid-flow-col">
        <div className="w-full">
            <h2 className="text-3xl font-bold tracking-wider mt-20 mb-10">Join our newsletter and get 20% off</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
        </div>
        <div>
            <Form className="flex pt-24">
                <input type="text" name="email" placeholder="Enter Email" className="input input-bordered" />
                <SubmitButton text="Subscribe"/>
            </Form>
        </div>
    </section>
  )
}

export default Newsletter