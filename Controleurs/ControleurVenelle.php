<?php

final class ControleurVenelle
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("Venelle/venelle");
        Vue::montrer("Standard/pied");
    }
}