<?php

final class ControleurBegur
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Begur/begur");
        Vue::montrer("Standard/pied");
    }
}