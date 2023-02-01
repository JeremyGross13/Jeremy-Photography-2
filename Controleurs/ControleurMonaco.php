<?php

final class ControleurMonaco
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Monaco/monaco");
        Vue::montrer("Standard/pied");
    }
}