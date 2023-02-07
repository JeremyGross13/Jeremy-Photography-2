<?php

final class ControleurContact
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete2");
        Vue::montrer("Standard/menu");
        Vue::montrer("Contact/contact");
        Vue::montrer("Standard/pied");
    }
}