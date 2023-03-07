<?php

final class ControleurSausset
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Sausset/sausset");
        Vue::montrer("Standard/pied");
    }
}