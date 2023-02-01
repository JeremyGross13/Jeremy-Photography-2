<?php

final class ControleurVenelle
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Venelle/venelle");
        Vue::montrer("Standard/pied");
    }
}