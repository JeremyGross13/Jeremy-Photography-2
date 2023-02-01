<?php

final class ControleurAPropos
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("APropos/aPropos");
        Vue::montrer("Standard/pied");
    }
}