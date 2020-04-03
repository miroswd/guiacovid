import React from 'react';

export default function Aplication(){
    
    const tags = [1,2,3,4,5,6]
    const bolinhas = [1,2,3]
    
    return(
        <div>
            <img src="https://jornalboavista.com.br/site/wp-content/uploads/2020/02/coronavirus-e-chernobyl.jpg"
        alt="Logo-app"/>
            <h1>Nome do App</h1>

            {/* tags */}
            {tags.map(t => (
                <img src="https://jornalboavista.com.br/site/wp-content/uploads/2020/02/coronavirus-e-chernobyl.jpg"
                alt="Logo-app" />
            ))}

            {/* Bolinhas */}
            {bolinhas.map(b => (
                <img src="https://jornalboavista.com.br/site/wp-content/uploads/2020/02/coronavirus-e-chernobyl.jpg"
                alt="Logo-app"/>
            ))}

            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus elit, pretium ac enim accumsan, rhoncus condimentum nibh. Vestibulum vehicula tellus eu dapibus dignissim. Quisque convallis a erat sit amet bibendum. Donec placerat pretium luctus. Ut porta orci nec massa ultricies laoreet. Donec sed arcu tellus. Donec iaculis suscipit elit vitae convallis. Mauris est orci, tincidunt nec pharetra a, mollis eu tellus. Quisque non ultrices metus. Vivamus condimentum feugiat dictum. Vestibulum commodo enim vel eros porta sollicitudin. Mauris porta non nunc nec posuere.

Nulla facilisi. Duis feugiat urna nisl, at accumsan nisi aliquet vitae. Donec efficitur tristique vehicula. Duis accumsan sem faucibus blandit viverra. Ut condimentum posuere cursus. Fusce a justo sit amet sem tristique convallis. Sed nec sagittis nisi. Cras non rutrum nibh, et posuere dolor. Nulla eu rutrum turpis.</p>
        </div>
    )
}