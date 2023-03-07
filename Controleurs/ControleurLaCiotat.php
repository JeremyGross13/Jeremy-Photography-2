<?php

final class ControleurLaCiotat
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("LaCiotat/laCiotat");
        Vue::montrer("Standard/pied");
    }
}