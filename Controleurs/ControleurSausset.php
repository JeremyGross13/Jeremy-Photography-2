<?php

final class ControleurVenelle
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("Sausset/sausset");
        Vue::montrer("Standard/pied");
    }
}