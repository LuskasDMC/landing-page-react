import React from "react"
import Card from '../Cards/CardLarge'
import WhiteButton from '../Buttons/WhiteButton'
import PurpleButton from '../Buttons/PurpleButton'

export default (props) => (
    <>
        <div id="block-3" className="row justify-content-center ml-0 mr-0">
            <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                <div className="row justify-content-between ml-0 mr-0">
                    <div className="col-12 col-sm-6 col-sm-6 col-lg-6 ">
                        <Card>
                            <h2 class="text-center font-weight-bold">30%</h2>
                            <h5 class="text-center font-weight-bold">Bolsa Mérito</h5>
                            <p class="text-center"> 
                                Quer fazer sua transferência para a Melhor Universidade Particular do Brasil? 
                                Se você possui coeficiente acima de 7 e está pronto para um novo desafio, a UVV é o seu lugar.
                            </p>
                            <div className="d-flex justify-content-center">
                                <div className="col-10">
                                    <WhiteButton text="Leia o regulamento"/>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-sm-6 col-lg-6 pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                        <Card>
                            <h2 class="text-center font-weight-bold">30%</h2>
                            <h5 class="text-center font-weight-bold">Bolsa Social</h5>
                            <p class="text-center"> 
                                Cursou todo o ensino médio em escola pública, ou com bolsa integral em escola particular? 
                                Então essa bolsa é para você!
                            </p>
                            <div className="d-flex justify-content-center">
                                <div className="col-10">
                                    <WhiteButton text="Leia o regulamento"/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="row justify-content-center pt-5">
                    <div className="col-9">
                        <h5 className="text-center font-weight-bold">
                            Não entre para uma universidade, entre para a História. 
                            UVV a Melhor Universidade particular do Brasil!
                            <div className="pt-4">
                                <PurpleButton text="INSCREVA-SE" size="small"/>
                            </div>
                        </h5>
                    </div>
                </div>

            </div>

            <img  id="footer-image" src="images/footer.png"/>
        </div>
    </>
)