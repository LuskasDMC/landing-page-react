import React from 'react'
import Button from '../Buttons/PurpleButton'

export default () => {
    return(
        <div id="section-1">
            <h2 className="d-none d-sm-block">Quando você dá o seu melhor, a UVV retribui.</h2>
            <p className="d-none d-lg-block text-muted pt-2">
                Na universidade Vila Velha, o bom desempenho do ENEM é premiado. 
                Aqui, as medalhas são bolsas de estudo durante toda a sua graduação.
            </p>
            <div className="d-flex justify-content-center justify-content-sm-start">
                <Button text="CONFIRA AS BOLSAS" size="medium"/>
            </div>
        </div>
    )
}
