import './ExampleComponent.css'

export default function ExampleComponent( {text} ) {
    return(
        <div className='ExampleComponent'>
            <h1>
               {text}
            </h1>
        </div>
    )
}