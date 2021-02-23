import React from 'react';


const Start = () => {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">TIC TAC TOE</h1>
                <p class="lead">CHOOSE YOUR WEAPON</p>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    X
                                    <button class="btn btn-outline-secondary" type="button">Player1</button>
                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                        <div class="col-sm">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    O
                                    <button class="btn btn-outline-secondary" type="button">Player2</button>
                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>   
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Start;