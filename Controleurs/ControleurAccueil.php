<?php

final class ControleurAccueil
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Accueil/accueil");
        Vue::montrer("Standard/pied");
    }
}