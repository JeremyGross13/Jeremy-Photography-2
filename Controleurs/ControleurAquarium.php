<?php

final class ControleurAquarium
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("Aquarium/aquarium");
        Vue::montrer("Standard/pied");
    }
}